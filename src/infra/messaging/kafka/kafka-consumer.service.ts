import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['true-mallard-8097-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'dHJ1ZS1tYWxsYXJkLTgwOTckEii8dxXLsidIe07E0JvArIQKXAAXAs3Cq36OYp0',
          password:
            'SLaVBW_BJBqZ0_itpu43Qk-sG_nuOHgieBOhihpCA-rFYTLTUky0X0EzehAkTDJ19APM2g==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
