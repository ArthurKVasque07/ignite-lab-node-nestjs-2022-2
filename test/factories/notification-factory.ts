import { Content } from "@application/entities/content";
import { Notification, NotificationsProps } from "@application/entities/notification";

type Override = Partial<NotificationsProps>

export function makeNotifcation(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('This is a notfiy! 2'),
    recipientId: 'example id1',
    ...override
  })
}
