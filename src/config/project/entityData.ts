// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. 2023
// SPDX-License-Identifier: Apache-2.0

import type { ValueOf } from 'type-fest';

import type { EntityData, Primitive } from '@/lib/types';

const DATA_PROPERTY_NAME_1 = 'water_level';
const DATA_PROPERTY_NAME_2 = 'turbidity';
const DATA_PROPERTY_NAME_3 = 'ph_value';
const DATA_PROPERTY_NAME_4 = 'temperature';
const DATA_PROPERTY_NAME_5 = 'pump_power_status';
const DATA_PROPERTY_NAME_6 = 'drain_power_status';
const ALARM_MESSAGE_PROPERTY_NAME = 'alarm_message';
const ALARM_VALUE_PROPERTY_NAME = 'alarm_message';

export const COMPONENT_NAMES = {
  Equipment: 'aquaculture',
  ProcessStep: 'process',
  Pump: 'pump',
  Drain: 'drain'

};

export const ENTITY_TYPES = {
  Equipment: 'Device',
  ProcessStep: 'Process step'
};

const PROCESS_ENTITY_DATA: EntityData[] = [
  {
    entityId: 'e8fe944e-2c23-4ea7-8cf4-4aa885614108',
    componentName: COMPONENT_NAMES.ProcessStep,
    name: 'water pumping',
    type: ENTITY_TYPES.ProcessStep
  },
  {
    entityId: '772d20ab-4c2e-4ab4-ae36-58e93b786272',
    componentName: COMPONENT_NAMES.ProcessStep,
    name: 'water draining',
    type: ENTITY_TYPES.ProcessStep
  },
];

const EQUIPMENT_ENTITY_DATA: EntityData[] = [
  {
    entityId: '9dc6a5c5-8b2b-4288-9d1e-a2823d4ac31f',
    componentName: COMPONENT_NAMES.Equipment,
    name: 'aquaculture system',
    properties: getProperties(),
    isRoot: true,
    type: ENTITY_TYPES.Equipment
  },
  {
    entityId: 'da679e07-3c83-4998-b94a-935d0c6d434f',
    componentName: COMPONENT_NAMES.Pump,
    name: 'pump',
    properties: [
      {
        propertyQueryInfo: {
          propertyName: DATA_PROPERTY_NAME_5,
          refId: crypto.randomUUID()
        },
        threshold: { upper: 1, lower: 0 },
        type: 'data',
        unit: ''
      }
    ],
    type: ENTITY_TYPES.Equipment
  },
  {
    entityId: 'fb7318d8-da92-458d-ba77-a54bc869fd81',
    componentName: COMPONENT_NAMES.Drain,
    name: 'drain',
    properties: [
      {
        propertyQueryInfo: {
          propertyName: DATA_PROPERTY_NAME_6,
          refId: crypto.randomUUID()
        },
        threshold: { upper: 1, lower: 0 },
        type: 'data',
        unit: ''
      },
      
    ],
    type: ENTITY_TYPES.Equipment
  }
];

export const ENTITY_DATA: EntityData[] = [...EQUIPMENT_ENTITY_DATA, ...PROCESS_ENTITY_DATA];

export const IGNORED_ENTITY_IDS: string[] = [];

export function createEventMessage(entityData: EntityData, message: Primitive): { name: string; message: string } {
  let normalizedName = '';
  let normailzedMessage = '';

  switch (entityData.entityId) {
    case '9dc6a5c5-8b2b-4288-9d1e-a2823d4ac31f': {
      normalizedName = 'Abnormal water state';
      normailzedMessage = `[Warning] Water quality not safe for aquatic life`;
      break;
    }
    default: {
      normalizedName = 'Abnormality in System';
      normailzedMessage = "Warning: Sytem going off normal state";
    }
  }

  return {
    name: normalizedName,
    message: normailzedMessage
  };
}

function getProperties(): ValueOf<EntityData, 'properties'> {
  return [
    {
      propertyQueryInfo: {
        propertyName: DATA_PROPERTY_NAME_1,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 100, lower: 25 },
      type: 'data',
      unit: 'm'
    },
    {
      propertyQueryInfo: {
        propertyName: DATA_PROPERTY_NAME_2,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 100, lower: 5 },
      type: 'data',
      unit: 'mg/L'
    },
    {
      propertyQueryInfo: {
        propertyName: DATA_PROPERTY_NAME_3,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 8.5, lower: 6.5 },
      type: 'data',
      unit: ''
    },
    {
      propertyQueryInfo: {
        propertyName: DATA_PROPERTY_NAME_4,
        refId: crypto.randomUUID()
      },
      threshold: { upper: 29, lower: 10 },
      type: 'data',
      unit: '°C'
    },
    {
      propertyQueryInfo: {
        propertyName: ALARM_VALUE_PROPERTY_NAME,
        refId: crypto.randomUUID()
      },
      type: 'alarm-state'
    },
    {
      propertyQueryInfo: {
        propertyName: ALARM_MESSAGE_PROPERTY_NAME,
        refId: crypto.randomUUID()
      },
      type: 'alarm-message'
    }
  ];
}
