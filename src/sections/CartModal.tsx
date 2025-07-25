import { FaTimes } from 'react-icons/fa';
import type { CartItem } from '../datas/data';

type CartModalProps = {
  cart: CartItem[];
  total: number;
  onClose: () => void;
  onCheckout: () => void;
  updateQuantity: (id: number, qty: number) => void;
  removeFromCart: (id: number) => void;
};

export function CartModal({
  cart,
  total,
  onClose,
  onCheckout,
  updateQuantity,
  removeFromCart
}: CartModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Seu Carrinho</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <FaTimes />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Seu carrinho está vazio</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="border-b pb-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-primary-500">R$ {item.price.toFixed(2)}/dia</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-16 px-2 py-1 border rounded text-center"
                        />
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <FaTimes size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between font-bold text-lg mb-6">
                  <span>Total:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <button
                  onClick={onCheckout}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg transition-colors"
                >
                  Continuar para Pagamento
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}