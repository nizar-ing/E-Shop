import PropTypes from 'prop-types';

export default function CartSummary({items, cartTotal}) {
    return (
        <div className='flex flex-col items-center gap-6 bg-gray-50 p-6 font-mono rounded-lg shadow-md order-1 md:order-2'>
            <h2 className='text-lg text-sky-800 font-bold mb-4'>Order Summary</h2>
            <div className='space-y-4 divide-y divide-gray-300'>
                {items.map((item) => (
                    <div key={item.id} className='flex justify-between text-sm text-gray-800'>
                        <span>
                          {item.title} (x{item.quantity})
                        </span>
                        <span>{(item.price * item.quantity).toFixed(2)}€</span>
                    </div>
                ))}
                <div className='pt-4'>
                    <div className='flex justify-between text-sky-800 font-semibold'>
                        <span>Total</span>
                        <span>{cartTotal.toFixed(2)}€</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

CartSummary.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            rating: PropTypes.shape({
                rate: PropTypes.number.isRequired,
                count: PropTypes.number.isRequired,
            }),
        })
    ).isRequired,
    cartTotal: PropTypes.number.isRequired,
};
