import FeatureItem from '@/Components/FeatureItem';
import FeatureUpvoteDownvote from '@/Components/FeatureUpvoteDownvote';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Feature, PaginatedData } from '@/types';
import { Head } from '@inertiajs/react';

export default function Show({ feature }: { feature: Feature }) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Feature <b>{feature.name}</b>
                </ h2>
            }
        >
            <Head title={'Feature ' + feature.name} />

            <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">
                <FeatureUpvoteDownvote feature={feature}/>

                <div className="flex-1">
                    <h2 className="text-2xl mb-2">{feature.name}</h2>
                    <p>{feature.description}</p>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
    );
}









/* 
    minchev 20․12․2024

Andreas: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

Samuel Grigoryan: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28

Maria (Silva qur): 5

Anna: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18

man: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22

Dina: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25

Mariam (Gohar): 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38

Milya: 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17

Mari: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

Mariam urish: 1, 2, 3, 4, 5, 6, 7, 8, 9

Anika: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40

Mash: 1, 2, 3, 4, 5, 6

Rita: 4, 5, 6, 7, 8

Angel: 1, 2, 3, 4, 5

eelen: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20

Aro: 3, 4, 5, 6, 7

Davo (black): 5, 6, 7, 8, 9, 10, 11, 12, 13

Davo: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17

David Gasparyan: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19

Hesu: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29

Gor: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11

Aramayis: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27

Samuel: 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41

Ruben: 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25


*/