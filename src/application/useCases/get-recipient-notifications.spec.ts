import { makeNotifcation } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get recipient notifications', () => {
  it('should be able to get recipients notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'example id1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example id1' }),
        expect.objectContaining({ recipientId: 'example id1' }),
      ]),
    );
  });
});
