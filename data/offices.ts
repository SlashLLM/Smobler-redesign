import { Office } from '@/types';

export const offices: Office[] = [
  {
    code: 'SG',
    city: 'Singapore',
    country: 'Singapore (Global HQ)',
    timezone: 'Asia/Singapore',
    address: '71 Ayer Rajah Crescent, #03-01, LaunchPad @ one-north, Singapore 139951',
    email: 'sg@smobler.io'
  },
  {
    code: 'NA',
    city: 'Austin',
    country: 'United States',
    timezone: 'America/Chicago',
    address: '600 Congress Ave, 14th Floor, Austin, TX 78701',
    email: 'na@smobler.io'
  },
  {
    code: 'LATAM',
    city: 'São Paulo',
    country: 'Brazil',
    timezone: 'America/Sao_Paulo',
    address: 'Av. Paulista, 1374 - Bela Vista, São Paulo - SP, 01310-100',
    email: 'latam@smobler.io'
  },
  {
    code: 'EU',
    city: 'London',
    country: 'United Kingdom',
    timezone: 'Europe/London',
    address: '1 Fore Street Ave, London EC2Y 9DT',
    email: 'eu@smobler.io'
  }
];
