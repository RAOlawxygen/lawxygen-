import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ServiceListItem from "./ServiceListItem";
import { 
  Building, 
  FileCheck, 
  FileText, 
  Users, 
  Calculator, 
  Shield, 
  Copyright,
  Clock,
  Check,
  Scale,
  Search
} from "lucide-react";

// Type for service categories
interface ServiceCategory {
  title: string;
  items: {
    title: string;
    description: string;
    to: string;
    icon: React.ComponentType<any>;
  }[];
}

// Service categories
const serviceCategories: ServiceCategory[] = [
  {
    title: "Business Setup",
    items: [
      {
        title: "Company Registration",
        description: "Register your business as a Private Limited, LLP, or OPC",
        to: "/services/company-registration",
        icon: Building
      },
      {
        title: "Government Registrations",
        description: "GST, PAN, TAN, and other essential registrations",
        to: "/services/government-registrations",
        icon: FileCheck
      },
      {
        title: "Business Compliance",
        description: "Annual filings and regulatory compliance",
        to: "/services/business-compliance",
        icon: Check
      }
    ]
  },
  {
    title: "Legal & Compliance",
    items: [
      {
        title: "Legal Document Drafting",
        description: "Contracts, agreements, and legal documents",
        to: "/services/legal-document-drafting",
        icon: FileText
      },
      {
        title: "HR & Payroll Compliance",
        description: "Employee contracts, HR policies, and payroll",
        to: "/services/hr-payroll-compliance",
        icon: Users
      },
      {
        title: "Financial Compliance",
        description: "Virtual CFO, accounting, and financial management",
        to: "/services/financial-compliance",
        icon: Calculator
      }
    ]
  },
  {
    title: "Specialized Services",
    items: [
      {
        title: "Intellectual Property",
        description: "Trademark, patent, and copyright registration",
        to: "/services/ip-services",
        icon: Copyright
      },
      {
        title: "Legal Retainer Plans",
        description: "Monthly subscription for ongoing legal support",
        to: "/services/legal-retainer-plans",
        icon: Clock
      },
      {
        title: "Startup Legal Consultation",
        description: "Specialized legal services for startups",
        to: "/services/startup-legal-consultation",
        icon: Shield
      }
    ]
  }
];

const ServiceDropdown = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] gap-4 p-6 md:w-[700px] md:grid-cols-3 lg:w-[900px] bg-white">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-3">
                  <h3 className="text-lg font-medium text-primary border-b pb-2 mb-3">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <ServiceListItem
                        key={itemIndex}
                        title={item.title}
                        to={item.to}
                        icon={item.icon}
                      >
                        {item.description}
                      </ServiceListItem>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-slate-50 p-4 border-t text-center">
              <Link 
                to="/search-results" 
                className="block text-center text-sm font-medium text-primary hover:text-primary/80"
              >
                Browse All Services
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ServiceDropdown;
