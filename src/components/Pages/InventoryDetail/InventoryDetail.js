import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { inventoryId } = useParams();
    return (
        <div>
            inventory page
        </div>
    );
};

export default InventoryDetail;