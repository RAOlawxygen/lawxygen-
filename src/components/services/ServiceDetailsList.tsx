
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceDetailsListProps {
  categoryId: string;
  categoryName: string;
  servicesList: string[];
  colorClass: string;
}

const ServiceDetailsList: React.FC<ServiceDetailsListProps> = ({
  categoryId,
  categoryName,
  servicesList,
  colorClass
}) => {
  // Map old color classes to new color scheme
  const getNewColorClass = (oldColorClass: string) => {
    if (oldColorClass.includes('teal')) return 'text-teal-600';
    if (oldColorClass.includes('blue')) return 'text-indigo-600';
    if (oldColorClass.includes('cyan')) return 'text-cyan-600';
    return 'text-indigo-600'; // Default to indigo
  };

  const getNewBgColorClass = (oldColorClass: string) => {
    if (oldColorClass.includes('teal')) return 'bg-teal-50';
    if (oldColorClass.includes('blue')) return 'bg-indigo-50';
    if (oldColorClass.includes('cyan')) return 'bg-cyan-50';
    return 'bg-indigo-50'; // Default to indigo
  };

  const getNewButtonColorClass = (oldColorClass: string) => {
    if (oldColorClass.includes('teal')) return 'bg-teal-600 hover:bg-teal-700';
    if (oldColorClass.includes('blue')) return 'bg-indigo-600 hover:bg-indigo-700';
    if (oldColorClass.includes('cyan')) return 'bg-cyan-600 hover:bg-cyan-700';
    return 'bg-indigo-600 hover:bg-indigo-700'; // Default to indigo
  };

  const newColorClass = getNewColorClass(colorClass);
  const newBgColorClass = getNewBgColorClass(colorClass);
  const newButtonColorClass = getNewButtonColorClass(colorClass);

  return (
    <div className="py-10">
      <div className="container-custom">
        <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className={`p-6 ${newBgColorClass} border-b`}>
            <h2 className="text-2xl font-bold text-gray-900">{categoryName} Services</h2>
            <p className="mt-2 text-gray-700">
              Explore our comprehensive range of {categoryName.toLowerCase()} services designed to meet your legal and business needs.
            </p>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-start group">
                  <CheckCircle className={`w-5 h-5 ${newColorClass} mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`} />
                  <div>
                    <h3 className="font-medium text-gray-900">{service}</h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Professional assistance with all aspects of {service.toLowerCase()}.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button asChild className={`${newButtonColorClass} text-white transition-colors`}>
                <Link to={`/search-results?category=${categoryId}`} className="flex items-center gap-2">
                  Find a {categoryName} Professional
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsList;
