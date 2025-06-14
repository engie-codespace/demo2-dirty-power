import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Our Services Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="ask-green-section" className="text-3xl font-bold text-blue-600">Ask us anything green</h2>
            <p className="mt-4 text-lg text-blue-600 max-w-3xl mx-auto">
              Discover our complete range of energy services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto border border-blue-200">
                <img src={process.env.PUBLIC_URL + '/contrat.png'} alt="Contract icon" className="h-12 w-12 object-contain rounded-full" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Energy Supply</h3>
              <p className="text-gray-600 text-center mb-6">
                We offer reliable and transparent energy contracts for both residential and business customers.
              </p>
              <div className="text-center">
                <Link to="/offers" className="text-primary font-medium hover:text-secondary">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto border border-blue-200">
                <img src={process.env.PUBLIC_URL + '/solar.png'} alt="Solar panel icon" className="h-12 w-12 object-contain rounded-full" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Buy your solar panel</h3>
              <p className="text-gray-600 text-center mb-6">
                Our experts help you optimize your energy consumption and reduce your bills.
              </p>
              <div className="text-center">
                <Link to="/services" className="text-primary font-medium hover:text-secondary">
                  Learn more →
                </Link>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="h-20 w-20 bg-primary rounded-full flex items-center justify-center mb-6 mx-auto border border-blue-200">
                <img src={process.env.PUBLIC_URL + '/car.png'} alt="Electric car icon" className="h-12 w-12 object-contain rounded-full" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Buy your electric car</h3>
              <p className="text-gray-600 text-center mb-6">
                A dedicated customer service team available to answer all your questions and solve your problems.
              </p>
              <div className="text-center">
                <Link to="/contact" className="text-primary font-medium hover:text-secondary">
                  Contact us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Figures Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Key Figures</h2>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
              DirtyPower in numbers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-xl">Years of experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500k+</div>
              <div className="text-xl">Satisfied customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-xl">Satisfaction rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-xl">Customer service</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover testimonials from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Mary Johnson</h4>
                  <p className="text-sm text-gray-600">Residential customer since 2020</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The customer service is really excellent. I always get quick responses to my questions and the rates are very competitive."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">John Smith</h4>
                  <p className="text-sm text-gray-600">SME Director, customer since 2018</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Thanks to personalized energy consultation, we've reduced our electricity bill by 15%. A reliable partner for our business."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sophia Williams</h4>
                  <p className="text-sm text-gray-600">Residential customer since 2019</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The transition to DirtyPower was simple and hassle-free. The prices are transparent and I've never had any surprises on my bill."
              </p>
              <div className="mt-4 flex text-yellow-500">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to switch energy suppliers?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Join DirtyPower today and benefit from competitive rates and quality customer service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/compare" 
              className="bg-white text-secondary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Compare our offers
            </Link>
            <Link 
              to="/contact" 
              className="bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
