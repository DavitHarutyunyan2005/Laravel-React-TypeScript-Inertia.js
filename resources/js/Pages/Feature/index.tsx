import FeatureItem from '@/Components/FeatureItem';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Feature, PaginatedData } from '@/types';
import { Head } from '@inertiajs/react';

export default function Index({ features }: { features: PaginatedData<Feature> }) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Features
                </ h2>
            }
        >
            <Head title="Dashboard" />


                {features.data.map(feature => (
                    <FeatureItem feature={feature}/>
                ))}
                
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