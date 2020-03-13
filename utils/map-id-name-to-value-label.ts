import { TIdNameRecord, TValueLabelRecord } from '../types/data-types';

export default (sourceArray: TIdNameRecord[]): TValueLabelRecord[] => (
    sourceArray.map((item: TIdNameRecord): TValueLabelRecord => (
        {
            value: item.id,
            label: item.name,
        }
    ))
);
