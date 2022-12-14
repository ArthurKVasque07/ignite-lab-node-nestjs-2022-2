import { Notification } from '../entities/notification';

export abstract class NotificationsRespository {
  abstract create(notifica: Notification): Promise<void>;
}
