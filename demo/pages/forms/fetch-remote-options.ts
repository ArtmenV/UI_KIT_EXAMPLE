import Api from '../../api';
import mapIdNameToValueLabel from '../../../utils/map-id-name-to-value-label';
import { TDropdownOption } from '../../../components/dropdown';
import { TIdNameRecord } from '../../../types/data-types';

export default async (): Promise<TDropdownOption[]> => {
    let response;
    try {
        response = await Api.get('/financialSource');
        debugger
    } catch (e) {
        throw new Error('Can`t get financialSources');
    }

    return mapIdNameToValueLabel((response.data as { list: TIdNameRecord[]}).list);
};
