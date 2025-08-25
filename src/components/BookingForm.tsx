import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PayPalButton from '@/components/PayPalButton';

interface BookingFormProps {
  experience: any;
  onSuccess: () => void;
}

const countries = [
  'Egypt', 'Afghanistan', 'United States', 'United Kingdom', 'France', 'Germany', 'Saudi Arabia', 'UAE', 'Qatar', 'Jordan', 'Other'
];

const BookingForm: React.FC<BookingFormProps> = ({ experience, onSuccess }) => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+20',
    phone: '',
    country: '',
    city: '',
    special: '',
    accepted: false,
  });
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm(f => ({ ...f, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handlePayPalSuccess = () => {
    setPaid(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.phone || !form.country || !form.city) {
      setError('Please fill all required fields.');
      return;
    }
    if (!form.accepted) {
      setError('You must accept the terms and conditions.');
      return;
    }
    if (!paid) {
      setError('Please complete payment through PayPal.');
      return;
    }
    setError('');
    onSuccess();
  };

  return (
    <form className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow p-8" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Cart Checkout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-1">First Name *</label>
          <input name="firstName" value={form.firstName} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1">Last Name *</label>
          <input name="lastName" value={form.lastName} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1">Email *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block mb-1">Phone No. *</label>
          <div className="flex">
            <select
              name="countryCode"
              value={form.countryCode}
              onChange={handleChange}
              className="border rounded-l px-2 py-2 bg-gray-50"
              style={{ minWidth: 80 }}
              required
            >
              <option value="+20">🇪🇬 +20</option>
              <option value="+966">🇸🇦 +966</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+974">🇶🇦 +974</option>
              <option value="+962">🇯🇴 +962</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+33">🇫🇷 +33</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+93">🇦🇫 +93</option>
              <option value="+">Other</option>
            </select>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border-t border-b border-r rounded-r px-3 py-2"
              placeholder="Phone number"
              required
              type="tel"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1">City</label>
          <input name="city" value={form.city} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block mb-1">Country</label>
          <select name="country" value={form.country} onChange={handleChange} className="w-full border rounded px-3 py-2">
            <option value="">-- Select --</option>
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Special Requirements</label>
        <textarea name="special" value={form.special} onChange={handleChange} className="w-full border rounded px-3 py-2" />
      </div>
      <div className="mb-4 flex items-center gap-2">
        <input type="checkbox" name="accepted" checked={form.accepted} onChange={handleChange} />
        <span>I have read and accept the <a href="#" className="text-primary">terms and conditions</a></span>
      </div>
      <div className="mb-4">
        <PayPalButton amount={experience.price} onSuccess={handlePayPalSuccess} />
        {!paid && <div className="text-red-500 text-sm mt-2">Please complete payment to continue.</div>}
      </div>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <Button type="submit" className="w-full bg-primary text-white">Submit</Button>
    </form>
  );
};

export default BookingForm;
