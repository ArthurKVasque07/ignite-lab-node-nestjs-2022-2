import { Notification } from './notification';
import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('Nova Solicitação de amizade!'),
      category: 'Social',
      recipientId: 'example',
    });

    expect(notification).toBeTruthy();
  });
});
