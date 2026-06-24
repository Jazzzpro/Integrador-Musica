import React, {useState} from 'react';
import { Product } from '../data/products';
import {useCarritoContext} from '../context/CartContext';

interface ProductCardProps {
    product: Product;
}
