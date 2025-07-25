// src/sanggar-tari/sanggar-tari.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GetNearestSanggarDto } from './dto/get-nearest-sanggar.dto';
import { SanggarTari } from '@prisma/client';

@Injectable()
export class SanggarTariService {
  constructor(private prisma: PrismaService) {}

  private calculateHaversineDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371; // Radius bumi dalam kilometer
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance; // Jarak dalam kilometer
  }

  async findNearestSanggar(
    query: GetNearestSanggarDto,
  ): Promise<(SanggarTari & { distance?: number })[]> {
    const { userLat, userLon, limit } = query;

    const sanggarList = await this.prisma.sanggarTari.findMany({
      where: {
        latitude: { not: null },
        longitude: { not: null },
      },
    });

    if (sanggarList.length === 0) {
      return [];
    }

    const sanggarWithDistance = [];
    for (const sanggar of sanggarList) {
      if (sanggar.latitude !== null && sanggar.longitude !== null) {
        const distance = this.calculateHaversineDistance(
          userLat,
          userLon,
          sanggar.latitude,
          sanggar.longitude,
        );
        sanggarWithDistance.push({ ...sanggar, distance });
      }
    }

    sanggarWithDistance.sort((a, b) => (a.distance || 0) - (b.distance || 0));

    return sanggarWithDistance.slice(0, limit);
  }
}