import React from 'react';
import PropTypes from "prop-types";
import {useCategories} from "../hooks/useCategories.js";


function SkeletonFilters() {
    return (
        <aside className='w-1/5 p-4 bg-white pb-4 animate-pulse'>
            <div className='mb-4'>
                <div className='h-4 bg-gray-200 w-1/3 mb-4 rounded' />
                <div className='h-10 bg-gray-200 rounded-md' />
            </div>

            <div className='mb-4'>
                <div className='h-4 bg-gray-200 w-1/3 mb-4 rounded' />
                <div className='flex flex-wrap gap-2'>
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className='h-8 bg-gray-200 w-20 rounded-full' />
                    ))}
                </div>
            </div>
        </aside>
    );
}

// const fetchCategories = async () => {
//     try {
//         const {data} = await axios.get("https://fakestoreapi.com/products/categories");
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// };

function Filters({filters, onFilter}) {
    // const {data: categories, error, isLoading} = useQuery({
    //     queryKey: ['categories'],
    //     queryFn: () => productsService.getCategories(),
    // });
    const {data: categories, error, isLoading} = useCategories();


    if (isLoading) return <SkeletonFilters />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <aside className="hidden mx-auto grow sm:flex sm:flex-col sm:gap-4 sm:w-1/5 sm:bg-white sm:p-4 sm:pb-4">
            <div>
                <h3 className="text-xl text-center font-semibold mb-4">Sort By</h3>
                <select className="w-full p-2 border rounded-md shadow-md" onChange={(e) => onFilter((prev) => ({...prev, sort: e.target.value}))}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
            <div>
                <h3 className="text-xl text-center font-semibold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                    <button className={`px-3 py-2 rounded-full capitalize ${
                        filters.category === ''
                            ? 'bg-sky-700 text-white'
                            : 'bg-gray-300 hover:bg-sky-700 hover:text-white'
                    }`}
                            onClick={() => onFilter((prev) => ({...prev, category: ''}))}
                    >
                        All Products
                    </button>
                    {categories.map(category => (
                        <button key={category}
                                className={`px-3 py-2 rounded-full capitalize ${
                                    filters.category === category
                                        ? 'bg-sky-700 text-white'
                                        : 'bg-gray-300 hover:bg-sky-700 hover:text-white'
                                }`}
                                onClick={() => onFilter((prev) => ({...prev, category}))}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/*<button className="block w-full px-4 py-2 text-white rounded bg-sky-600"*/}
            {/*        onClick={() => onFilter('under500')}>*/}
            {/*    Under 500€*/}
            {/*    </button>*/}
            {/*    <button className="block w-full px-4 py-2 text-white rounded bg-gray-500" onClick={() => onFilter('all')}>*/}
            {/*        Show All Products*/}
            {/*    </button>*/}

        </aside>);
}


Filters.propTypes = {
    filters: PropTypes.shape({
        category: PropTypes.string,
        sort: PropTypes.string,
        maxPrice: PropTypes.number
    }),
    onFilter: PropTypes.func.isRequired,
}


export default Filters;
