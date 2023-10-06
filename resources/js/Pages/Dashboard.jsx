import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia"

export default function Dashboard({ props,auth }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = { 
            title,
            description,
            category
        };
        Inertia.post('/news', data);
    }

    console.log('props last:',props)

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Berita Saya
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <input
                                type="text"
                                placeholder="Judul"
                                className="input input-bordered w-full m-2 "
                                onChange={(title) => setTitle(title.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Deskripsi"
                                className="input input-bordered w-full m-2 "
                                onChange={(description) => setDescription(description.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Kategori"
                                className="input input-bordered w-full m-2 "
                                onChange={(category) => setCategory(category.target.value)}
                            />
                            <button type="submit" onClick={() => handleSubmit()} className="btn btn-primary m-2">Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
