import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import type { Product } from '../datas/data';

type QuantityModalProps = {
  product: Product;
  quantity: number;
  onClose: () => void;
  onQuantityChange: (quantity: number) => void;
  onAddToCart: () => void;
};

export function QuantityModal({
  product,
  quantity,
  onClose,
  onQuantityChange,
  onAddToCart
}: QuantityModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-sm w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Selecione a quantidade</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <FaTimes />
          </button>
        </div>

        <div className="mb-4">
          <h4 className="font-medium">{product.name}</h4>
          <p className="text-primary-500">R$ {product.price.toFixed(2)} cada</p>
        </div>

        <div className="flex items-center justify-between my-6">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="px-4 py-2 bg-gray-200 rounded-l-lg hover:bg-gray-300"
          >
            <FaMinus />
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => onQuantityChange(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-20 px-3 py-2 border-t border-b text-center"
          />
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="px-4 py-2 bg-gray-200 rounded-r-lg hover:bg-gray-300"
          >
            <FaPlus />
          </button>
        </div>

        <div className="flex justify-between items-center mb-6 font-medium">
          <span>Subtotal:</span>
          <span>R$ {(product.price * quantity).toFixed(2)}</span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            onClick={onAddToCart}
            className="flex-1 bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}