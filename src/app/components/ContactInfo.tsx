import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+94 72 878 7872',
      href: 'tel:+94728787872',
      color: 'text-green-400'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'support@oyoeats.lk',
      href: 'mailto:support@oyoeats.lk',
      color: 'text-blue-400'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '17 Owita, Nawalapitiya',
      href: 'https://maps.google.com/?q=17+Owita+Nawalapitiya',
      color: 'text-red-400'
    },
    {
      icon: Clock,
      label: 'Hours',
      value: '10:00 AM - 11:00 PM',
      href: null,
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {contactDetails.map((detail, index) => {
        const Icon = detail.icon;
        return (
          <a
            key={index}
            href={detail.href || '#'}
            className={`flex items-center gap-3 p-4 rounded-lg bg-[#18191B] border border-[#648402]/20 hover:border-[#648402]/40 transition-all duration-300 ${detail.href ? 'hover:bg-[#2E3135]' : 'cursor-default'}`}
          >
            <Icon className={`h-5 w-5 ${detail.color}`} />
            <div>
              <p className="text-xs text-gray-400">{detail.label}</p>
              <p className="text-sm font-medium text-white">{detail.value}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ContactInfo;
