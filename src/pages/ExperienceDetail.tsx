import React, { useState } from 'react';
import { useCart } from '@/components/CartContext';
import { toast } from '@/components/ui/sonner';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import BookingForm from '@/components/BookingForm';

interface ExperienceDetailProps {
  experiences: any[];
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ experiences }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const experience = experiences[Number(id)];

  const [showBooking, setShowBooking] = useState(false);
  const [success, setSuccess] = useState(false);
  const { addToCart } = useCart();

  if (!experience) return <div>Experience not found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 flex flex-col md:flex-row gap-8">
      {experience.images ? (
        <div className="w-full md:w-1/2">
          <div className="flex gap-2 overflow-x-auto">
            {experience.images.map((img: string, idx: number) => (
              <img key={idx} src={img} alt={experience.title + ' ' + (idx+1)} className="h-64 w-auto object-cover rounded-lg shadow" />
            ))}
          </div>
        </div>
      ) : (
        <img src={experience.image} alt={experience.title} className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow" />
      )}
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-foreground">{experience.title}</h1>
        <div className="text-lg text-muted-foreground">{experience.location} • {experience.duration}</div>
        <div className="text-2xl font-bold text-primary">{experience.currency}{experience.price}.00</div>
        <div className="flex gap-4 mt-4">
          <Button className="bg-primary text-white" onClick={() => setShowBooking(true)}>Book Now</Button>
          <Button variant="outline" onClick={() => {
            addToCart({
              id: Number(id),
              title: experience.title,
              price: experience.price,
              currency: experience.currency,
              image: experience.image
            });
            toast.success('Added to cart successfully!');
          }}>Add to Cart</Button>
        </div>
        <Button variant="ghost" className="mt-8 w-fit" onClick={() => navigate(-1)}>Back</Button>
      </div>
      {showBooking && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full relative">
            <button className="absolute top-2 right-2 text-xl" onClick={() => setShowBooking(false)}>&times;</button>
            {!success ? (
              <BookingForm experience={experience} onSuccess={() => setSuccess(true)} />
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Booking Successful!</h2>
                <p>Thank you for your booking. A confirmation email will be sent to you.</p>
                <Button className="mt-6" onClick={() => { setShowBooking(false); setSuccess(false); }}>Close</Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceDetail;
