import * as React from 'react';
import cx from 'classnames';

import TableRow from './components/row';
import { TableColumnProps } from './types';

import './styles.less';

type TRowItem = Record<string, any>;
type TRowClickHandler = (row: TRowItem, index?: number) => void;

export interface TableProps {
    className?: string;
    id?: string;
    columns: TableColumnProps[];
    rows: TRowItem[];
    hasVerticalBorders?: boolean;
    onClickRow?: TRowClickHandler;
}

const calculateColumnsWidth = (columns: TableColumnProps[]): string[] => (columns.map(
    (columnItem: TableColumnProps): string => {
        let result = 'auto';
        const regexpMatch = /^\d+px$/.exec(columnItem.width || '');

        if (regexpMatch) {
            [result] = regexpMatch;
        }

        return result;
    },
));

const Table = ({
    className,
    columns,
    rows,
    hasVerticalBorders,
    onClickRow,
}: TableProps): JSX.Element => {
    const [selectedRow, setSelectedRow] = React.useState<number | undefined>(undefined);

    const widthSet = calculateColumnsWidth(columns);
    const getColumnArrayFromObject = (row: TRowItem): string[] => (
        columns.map((columnsItem: TableColumnProps): string => row[columnsItem.name] || '')
    );

    const handleClickRow = (rowItem: TRowItem, index: number): () => void => (): void => {
        setSelectedRow(index);

        if (onClickRow) {
            onClickRow(rowItem, index);
        }
    };

    return (
        <table className={cx('data-table', className)}>
            <thead>
                <TableRow
                    columns={columns.map((columnsItem: TableColumnProps): string => columnsItem.label)}
                    widthSet={widthSet}
                    className="table-head-row"
                    hasVerticalBorders={hasVerticalBorders}
                />
            </thead>
            <tbody>
                {rows.map((rowItem: TRowItem, index: number): JSX.Element => (
                    <TableRow
                        columns={getColumnArrayFromObject(rowItem)}
                        widthSet={widthSet}
                        hasVerticalBorders={hasVerticalBorders}
                        isSelected={selectedRow === index}
                        onClick={handleClickRow(rowItem, index)}
                    />
                ))}
            </tbody>
        </table>
    );
};

Table.defaultProps = {
    className: '',
};

export default Table;
