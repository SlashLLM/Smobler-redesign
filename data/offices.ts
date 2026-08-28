import { Office } from '@/types';

export const offices: Office[] = [
  {
    code: 'SG',
    city: 'Singapore',
    country: 'Singapore (Global HQ)',
    timezone: 'Asia/Singapore',
    address: '10 Anson Road #22-02, Singapore 079903',
    email: 'hello@smobler.io'
  },
  {
    code: 'NA',
    city: 'Honolulu',
    country: 'Hawai‘i, United States',
    timezone: 'Pacific/Honolulu',
    address: 'Wahiawā Value-Added Product Development Center, in partnership with Leeward Community College and the State of Hawai‘i',
    email: 'loretta@smobler.io'
  },
  {
    code: 'LATAM',
    city: 'São Paulo',
    country: 'Brazil',
    timezone: 'America/Sao_Paulo',
    address: 'Latin America presence established through the Scale Up in Brazil programme',
    email: 'veronica@smobler.io'
  }
];
