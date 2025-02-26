import { supabase } from "@/lib/supabase/client";
import CompanyCard from "@/components/CompanyCard";
import { SearchFilters } from '@/components/ui/SearchFilters';
import { cookies } from 'next/headers'; 

interface Company { 
  id: string;
  name: string;
  industry: string;
 
}

interface PageProps {
  searchParams: { [key: string]: string | undefined };
}

export default async function Home({ searchParams }: PageProps) {
  
  const cookieStore = cookies();
  const authToken = (await cookieStore).get('sb-fgiptqqhrvaxllhranzz-auth-token');
  console.log('Auth Token:', authToken?.value);


  let query = supabase.from('companies').select('*');

  if (searchParams.industry) {
    query = query.eq('industry', searchParams.industry);
  }
  if (searchParams.search) {
    query = query.ilike('name', `%${searchParams.search}%`);
  }

  const { data: companies, error } = await query;

  if (error) {
    console.error('Error fetching companies:', error);
    return (
      <div className="text-red-500 text-center p-4"> {/* Improved error message styling */}
        Error loading companies. Please try again later.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <SearchFilters />
      {companies?.length > 0 ? (
        companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))
      ) : (
        <p className="text-center text-gray-500">No companies found.</p> )
      } 
    </div>
  );
}