import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { type CartItem, type Product } from '../datas/data';
import jogoMesaCadeiraImg from '../assets/img-jogo-mesa.webp';
import mesaUnidImg from '../assets/img-mesa-unid.webp';
import cadeiraUnidImg from '../assets/img-cadeira-unid.webp';
import { CartModal } from './CartModal';
import { QuantityModal } from './QuantityModal';
import { CheckoutForm } from './CheckoutForm';

export function Products() {
  const [products] = useState<Product[]>([
    { id: 1, name: "Jogo de Mesa quadrada (4 lugares)", price: 12.00, image: jogoMesaCadeiraImg },
    { id: 2, name: "Mesa de Plástico Branca (Unidade)", price: 4.00, image: mesaUnidImg },
    { id: 3, name: "Cadeira de Plástico Branca (Unidade)", price: 2.50, image: cadeiraUnidImg }
  ]);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [clientData, setClientData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    address: ''
  });

  const addToCart = () => {
    if (!selectedProduct) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === selectedProduct.id);
      return existingItem
        ? prevCart.map(item =>
          item.id === selectedProduct.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        : [...prevCart, { ...selectedProduct, quantity }];
    });

    setSelectedProduct(null);
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handleClientDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setClientData(prev => ({ ...prev, [name]: value }));
  };

  const sendWhatsAppMessage = () => {
    const itemsText = cart.map(item =>
      `▶ ${item.name}\nQuantidade: ${item.quantity}\nValor: R$ ${(item.price * item.quantity).toFixed(2)}`
    ).join('\n\n');

    const message = `*Pedido de Aluguel*\n\n${itemsText}\n\n*Total: R$ ${total.toFixed(2)}*\n\n*Dados do Cliente*\nNome: ${clientData.name}\nTelefone: ${clientData.phone}\nData: ${clientData.eventDate}\nEndereço: ${clientData.address}`;

    const phone = "5561991163414";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Seção de Produtos */}
      <section  id="products" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nossos Produtos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={() => {
                setSelectedProduct(product);
                setQuantity(1);
              }}
            />
          ))}
        </div>
      </section>

      {/* Botão do Carrinho */}
<button
  onClick={() => setShowCart(true)}
  className="fixed right-6 top-24 md:top-32 lg:top-40 bg-primary-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-primary-600 transition-all duration-300 group"
>
  <FiShoppingCart className="group-hover:scale-110 transition-transform" />
  {cart.length > 0 && (
    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-strong-pulse">
      {cart.reduce((sum, item) => sum + item.quantity, 0)}
    </span>
  )}
</button>
      {/* Modais */}
      {showCart && (
        <CartModal
          cart={cart}
          total={total}
          onClose={() => setShowCart(false)}
          onCheckout={handleCheckout}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      )}

      {selectedProduct && (
        <QuantityModal
          product={selectedProduct}
          quantity={quantity}
          onClose={() => setSelectedProduct(null)}
          onQuantityChange={setQuantity}
          onAddToCart={addToCart}
        />
      )}

      {showCheckout && (
        <CheckoutForm
          clientData={clientData}
          cart={cart}
          total={total}
          onChange={handleClientDataChange}
          onBack={() => {
            setShowCheckout(false);
            setShowCart(true);
          }}
          onSubmit={sendWhatsAppMessage}
        />
      )}
    </div>
  );
}

// Componente de Card de Produto (pode ser movido para um arquivo separado se desejar)
function ProductCard({ product, onAdd }: { product: Product; onAdd: () => void }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all h-full flex flex-col">
      <div className="h-64 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-bold text-xl mb-2">{product.name}</h3>
        <p className="text-primary-500 font-semibold mb-4">R$ {product.price.toFixed(2)}/dia</p>
        <button
          onClick={onAdd}
          className="mt-auto bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg transition-colors"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}