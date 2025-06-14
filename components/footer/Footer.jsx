import React from 'react'
import { MessageCircle, Mail, Phone } from 'lucide-react';

const FooterPage = () => {
  return (
    <div className="bg-gray-800 shadow-md rounded-b-2xl fixed bottom-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2 space-y-2 sm:space-y-0">

                <div className="text-amber-50 text-sm text-center sm:text-left font-medium">
                    &copy; {new Date().getFullYear()} Narendrakumar. All rights reserved.
                </div>

                <div className="flex flex-wrap justify-center sm:justify-end space-x-6">
                    <a href="https://wa.me/7304851497" target="_blank"><MessageCircle className="text-amber-50" /></a>
                    <a href="mailto:narendrakumawat410@gmail.com"><Mail className="text-amber-50" /></a>
                </div>

            </div>
        </div>
    </div>
  )
};

export default FooterPage;


