import { Notification } from '../../src/application/entities/notification';
import { NotificationsRespository } from '../../src/application/repositories/notifcations-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRespository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
