import { useFormStatus } from 'react-dom';
import PropTypes from 'prop-types';

import {Send} from "lucide-react";

export default function CheckoutForm({ onSubmit }) {
    const { pending } = useFormStatus();

    return (
        <form action={onSubmit} className='space-y-5'>
            <div>
                <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                >
                    Full Name
                </label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full px-3 py-2 border-2 border-gray-300 bg-white rounded-md shadow'
                    required
                />
            </div>
            <div>
                <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                >
                    Email
                </label>
                <input
                    type='text'
                    id='email'
                    name='email'
                    className='w-full px-3 py-2 border-2 border-gray-300 bg-white rounded-md shadow'
                    required
                />
            </div>
            <div>
                <label
                    htmlFor='address'
                    className='block text-sm font-medium text-gray-700 mb-1'
                >
                    Address
                </label>
                <input
                    type='text'
                    id='address'
                    name='address'
                    className='w-full px-3 py-2 border-2 border-gray-300 bg-white rounded-md shadow'
                    required
                />
            </div>

            <div className='grid grid-cols-2 gap-4'>
                <div>
                    <label
                        htmlFor='city'
                        className='block text-sm font-medium text-gray-700 mb-1'
                    >
                        City
                    </label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        className='w-full px-3 py-2 border-2 border-gray-300 bg-white rounded-md shadow'
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor='zipCode'
                        className='block text-sm font-medium text-gray-700 mb-1'
                    >
                        Zip Code
                    </label>
                    <input
                        type='text'
                        id='zipCode'
                        name='zipCode'
                        className='w-full px-3 py-2 border-2 border-gray-300 bg-white rounded-md shadow'
                        required
                    />
                </div>
            </div>

            <button
                type='submit'
                className='flex justify-center items-center gap-4 w-full bg-sky-700 hover:bg-sky-800 text-white px-6 py-3 rounded-lg transition-colors disabled:bg-blue-400'
                disabled={pending}
            >
                {pending ? 'Processing order...' : 'Place Order'}
                {!pending && <Send />}
            </button>
        </form>
    );
}

CheckoutForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
