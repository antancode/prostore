import { cn } from '@/lib/utils';
import React from 'react'

const ProductPrice = ({ value, className }: { value: number; className?: string }) => {
    const stringValue = value.toFixed(2);
    const [price, cents] = stringValue.split('.');
    return (
        <div className={cn('text-2xl', className)}>
            <span className='text-xs align-super'>$</span>
            <span>{price}</span>
            <span className='text-xs align-super'>.{cents}</span>
        </div>
    )
}

export default ProductPrice