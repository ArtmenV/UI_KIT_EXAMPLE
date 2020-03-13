import * as React from 'react';
import cx from 'classnames';

export interface TableRowProps {
    className?: string;
    columns: string[];
    widthSet: string[];
    hasVerticalBorders?: boolean;
    isSelected?: boolean;
    onClick?: () => void;
}

const TableRow = ({
    className,
    columns,
    widthSet,
    hasVerticalBorders,
    isSelected,
    onClick,
}: TableRowProps): JSX.Element => (
    <tr
        className={cx('table-row', className, {
            'table-row--selected': isSelected,
        })}
        onClick={onClick}
    >
        {columns.map((columnItem: string, columnIndex: number): JSX.Element => (
            <td
                className={cx('table-cell', {
                    'table-cell--vertical-bordered': hasVerticalBorders,
                })}
                style={{
                    width: widthSet[columnIndex],
                }}
            >
                {columnItem}
            </td>
        ))}
    </tr>
);

TableRow.defaultProps = {
    className: '',
};

export default TableRow;
