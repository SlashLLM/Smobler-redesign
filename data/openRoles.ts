import { OpenRole } from '@/types';

export const openRoles: OpenRole[] = [
  {
    id: 'lead-ai-systems-engineer',
    title: 'Lead AI Systems Engineer',
    discipline: 'AI Systems',
    office: 'SG',
    officeName: 'Singapore HQ / Remote',
    employmentType: 'Full-time',
    locationType: 'Hybrid',
    applyUrl: '/contact?role=lead-ai-systems-engineer',
    description: 'Lead the architecture of our real-time NPC behavioral runtime, conversational context streaming, and procedural voxel generation pipelines.',
    requirements: [
      '5+ years building production ML/AI backend microservices',
      'Hands-on experience with LLM orchestration (LangChain, LlamaIndex, vLLM) and low-latency inference streaming',
      'Familiarity with spatial data formats, voxel geometry, or game engine integrations (Unity/Unreal/Sandbox)',
      'Proven track record scaling real-time distributed systems'
    ],
    isOpen: true,
  },
  {
    id: 'senior-voxel-technical-artist',
    title: 'Senior Voxel Technical Artist',
    discipline: 'Art & Voxels',
    office: 'LATAM',
    officeName: 'São Paulo / Remote',
    employmentType: 'Full-time',
    locationType: 'Remote',
    applyUrl: '/contact?role=senior-voxel-technical-artist',
    description: 'Bridge the boundary between conceptual art and procedural voxel engines. Develop shaders, rigging pipelines, and optimization tools for high-density virtual worlds.',
    requirements: [
      'Mastery of MagicaVoxel, VoxEdit, Blender, and procedural shader creation',
      'Strong rigging and animation chops within strict bone and polygon budgets',
      'Understanding of texture baking, draw-call batching, and LOD generation for spatial engines',
      'Passion for pushing the aesthetic boundaries of voxel and low-poly art'
    ],
    isOpen: true,
  },
  {
    id: 'spatial-producer',
    title: 'Spatial Producer & Delivery Lead',
    discipline: 'Production',
    office: 'NA',
    officeName: 'Austin / Remote',
    employmentType: 'Full-time',
    locationType: 'Remote',
    applyUrl: '/contact?role=spatial-producer',
    description: 'Manage complex multi-month client engagements for global brands, game studios, and government partners from initial world scoping through live deployment.',
    requirements: [
      '3+ years producing interactive games, virtual experiences, or enterprise digital products',
      'Exceptional stakeholder communication with C-level clients and cross-functional technical teams',
      'Proficiency with agile sprints, milestone gating, and resource forecasting across global timezones'
    ],
    isOpen: true,
  }
];
