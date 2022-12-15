import { makeNotifcation } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotifcation({ recipientId: 'example id1' }),
    );

    await notificationsRepository.create(
      makeNotifcation({ recipientId: 'example id1' }),
    );

    await notificationsRepository.create(
      makeNotifcation({ recipientId: 'example id2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'example id1',
    });

    expect(count).toEqual(2);
  });
});
