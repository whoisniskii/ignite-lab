import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    const { category, content, createdAt, id, readAt, recipientId } =
      notification;

    return {
      id,
      content: content.value,
      category,
      recipientId,
      readAt,
      createdAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    const {
      category,
      content,
      recipientId,
      canceledAt,
      createdAt,
      readAt,
      id,
    } = raw;

    return new Notification(
      {
        category,
        content: new Content(content),
        recipientId,
        readAt,
        canceledAt,
        createdAt,
      },
      id,
    );
  }
}
