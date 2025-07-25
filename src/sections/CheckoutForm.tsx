import { FaWhatsapp } from 'react-icons/fa';
import type { CartItem } from '../datas/data';

type CheckoutFormProps = {
  clientData: {
    name: string;
    phone: string;
    eventDate: string;
    address: string;
  };
  cart: CartItem[];
  total: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBack: () => void;
  onSubmit: () => void;
};

export function CheckoutForm({
  clientData,
  cart,
  total,
  onChange,
  onBack,
  onSubmit
}: CheckoutFormProps) {
  const today = new Date().toISOString().split('T')[0];
  const isFormValid = clientData.name && clientData.phone && clientData.eventDate && clientData.address;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-6">Finalizar Pedido</h3>

          <div className="mb-8">
            <h4 className="font-bold text-lg mb-4">Itens do Pedido</h4>
            <div className="space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t mt-3 pt-3 font-bold flex justify-between">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg">Dados para Entrega</h4>
            
            <div>
              <label className="block mb-1">Nome Completo*</label>
              <input
                type="text"
                name="name"
                value={clientData.name}
                onChange={onChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Telefone*</label>
              <input
                type="tel"
                name="phone"
                value={clientData.phone}
                onChange={onChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Data do Evento*</label>
              <input
                type="date"
                name="eventDate"
                min={today}
                value={clientData.eventDate}
                onChange={onChange}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block mb-1">Endereço Completo*</label>
              <textarea
                name="address"
                value={clientData.address}
                onChange={onChange}
                rows={3}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={onBack}
              className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-100"
            >
              Voltar
            </button>
            <button
              onClick={onSubmit}
              disabled={!isFormValid}
              className={`flex-1 bg-green-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 ${
                isFormValid ? 'hover:bg-green-600' : 'opacity-50 cursor-not-allowed'
              }`}
            >
              <FaWhatsapp /> Enviar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}