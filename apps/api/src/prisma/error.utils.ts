import { HttpException, InternalServerErrorException } from '@nestjs/common';

export const catchPrismaClientError = (
  error: { code?: string; meta?: any },
  mapping: Record<string, (meta?: any) => HttpException>,
): Promise<never> => {
  if (error.code && mapping.hasOwnProperty(error.code)) {
    return Promise.reject(mapping[error.code](error.meta));
  }
  return Promise.reject(new InternalServerErrorException(error));
};
