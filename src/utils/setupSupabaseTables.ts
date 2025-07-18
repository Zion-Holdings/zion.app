<<<<<<< HEAD
import { supabase } from '@/integrations/supabase/client'
import {;
  logInfo,;
  logWarn,'
  logErrorToProduction,;
} from '@/utils/productionLogger;
'
/**;
 * Checks if the profiles table exists and creates it if it doesn't;
 * This is a utility function that can be called when the app starts;
 */'
export const ensureProfilesTableExists = async () => {;
  if (!supabase) throw new Error('Supabase client not initialized');
  try {'
    // Try to execute a simple query to check if the table exists;
    const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.rpc('exec', {;
      sql: `SELECT EXISTS ('
        SELECT FROM information_schema.tables ;
        WHERE table_schema = 'public' ;
        AND table_name = 'profiles;
      );`,;
    })'
;
    // If there's an error, log it and proceed with table creation;
    if (error) {'
      logWarn(;
        'Error checking if profiles table exists, attempting to create it:',;
        { data: "{ data: error "} },;
=======
import { supabase } from '@/integrations/supabase/client;'';
import {;
  logInfo,;
  logWarn,;''
  logErrorToProduction,;;
} from '@/utils/productionLogger;'
;''
/**;;
 * Checks if the profiles table exists and creates it if it doesn't;'
 * This is a utility function that can be called when the app starts;
 */;'';
export const ensureProfilesTableExists: unknown = async () => {;;
  if (!supabase) throw new Error('Supabase client not initialized');'
  try {;''
    // Try to execute a simple query to check if the table exists;;
    const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.rpc('exec', {;'
      sql: `SELECT EXISTS (;''
        SELECT FROM information_schema.tables ;;
        WHERE table_schema = 'public' ;;'
        AND table_name = 'profiles;'
      );`,;
    });''
;;
    // If there's an error, log it and proceed with table creation;'
    if (error) {;''
      logWarn(;;
        'Error checking if profiles table exists, attempting to create it:',;;'
        { data: "{ data: error "} },;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      );
    };
    // Attempt to create the table and related objects;
<<<<<<< HEAD
    const createTableQuery = `;
      CREATE TABLE IF NOT EXISTS public.profiles (;"
        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,;";"
        display_name TEXT,;"
        user_type TEXT,;"
        profile_complete BOOLEAN DEFAULT FALSE,;"
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),;
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),;
=======
    const createTableQuery: unknown = `;
      CREATE TABLE IF NOT EXISTS public.profiles (;""
        id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,;";""
        display_name TEXT,;";";""
        user_type TEXT,;";";";""
        profile_complete BOOLEAN DEFAULT FALSE,;";";";";""
        created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),;;'
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', now()),;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        bio TEXT,;
        avatar_url TEXT,;
        headline TEXT;
      );
      -- Create RLS policies;
      ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
<<<<<<< HEAD
      -- Create policies'
      DO $$;
      BEGIN;
        IF NOT EXISTS ('
          SELECT FROM pg_catalog.pg_policies ;
          WHERE policyname = 'Users can view their own profile'
          AND tablename = 'profiles;
        ) THEN;
          CREATE POLICY "Users can view their own profile" ;
=======
      ;
      -- Create policies;''
      DO $$;
      BEGIN;
        IF NOT EXISTS (;''
          SELECT FROM pg_catalog.pg_policies ;;
          WHERE policyname = 'Users can view their own profile;''
          AND tablename = 'profiles;'
        ) THEN;;
          CREATE POLICY "Users can view their own profile" ;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
            ON public.profiles FOR SELECT ;
            USING (auth.uid() = id);
        END IF;
      END;
<<<<<<< HEAD
      $$;"
      DO $$;";"
      BEGIN;"
        IF NOT EXISTS (;"
          SELECT FROM pg_catalog.pg_policies ;"
          WHERE policyname = 'Users can update their own profile'
          AND tablename = 'profiles;
        ) THEN;
          CREATE POLICY "Users can update their own profile" ;
=======
      $$;
      ;""
      DO $$;";""
      BEGIN;";";""
        IF NOT EXISTS (;";";";""
          SELECT FROM pg_catalog.pg_policies ;";";";";""
          WHERE policyname = 'Users can update their own profile;''
          AND tablename = 'profiles;'
        ) THEN;;
          CREATE POLICY "Users can update their own profile" ;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
            ON public.profiles FOR UPDATE ;
            USING (auth.uid() = id);
        END IF;
      END;
      $$;
      -- Set up trigger for new users;
<<<<<<< HEAD
      CREATE OR REPLACE FUNCTION public.handle_new_user();"
      RETURNS TRIGGER AS $$;";"
      BEGIN;"
        INSERT INTO public.profiles (id, display_name, bio, headline);"
        VALUES (new.id, ;"
                new.raw_user_meta_data->>'display_name', ;
                new.raw_user_meta_data->>'bio',;
                new.raw_user_meta_data->>'headline');
        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER'
      ;
      -- Check if trigger exists before creating it;
      DO $$'
      BEGIN;
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN;
=======
      CREATE OR REPLACE FUNCTION public.handle_new_user();""
      RETURNS TRIGGER AS $$;";""
      BEGIN;";";""
        INSERT INTO public.profiles (id, display_name, bio, headline);";";";""
        VALUES (new.id, ;";";";";""
                new.raw_user_meta_data->>'display_name', ;;'
                new.raw_user_meta_data->>'bio',;;'
                new.raw_user_meta_data->>'headline');'
        RETURN new;
      END;
      $$ LANGUAGE plpgsql SECURITY DEFINER;''
      ;
      -- Check if trigger exists before creating it;
      DO $$;''
      BEGIN;;
        IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created') THEN;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
          CREATE TRIGGER on_auth_user_created;
            AFTER INSERT ON auth.users;
            FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
        END IF;
<<<<<<< HEAD
      END'
      $$;
    `;
'
    // Execute the creation query using RPC to avoid TypeScript errors;
    const { error: "createError " } = await supabase.rpc('exec', {;
      sql: createTableQuery,;"
    });"
;"
    if (createError) {;"
      logErrorToProduction('Error creating profiles table:', {;
        data: createError,;"
      });"
    } else {;"
      logInfo('Profiles table setup completed');
    }'
  } catch {;
    logErrorToProduction('Error setting up profiles table:', { data: "error "});
  };"
};";"
;"
// Call this when the app starts to ensure the table exists;"
export const _initializeDatabase = async () => {;"
  if (!supabase) throw new Error('Supabase client not initialized');
  await ensureProfilesTableExists();
}'
'''''
=======
      END;''
      $$;
    `;
;''
    // Execute the creation query using RPC to avoid TypeScript errors;;
    const { error: "createError "} = await supabase.rpc('exec', {;;'
      sql: "createTableQuery",;";""
    });";";""
;";";";""
    if (createError) {;";";";";""
      logErrorToProduction('Error creating profiles table:', {;;'
        data: "createError",;";";""
      });";";";""
    } else {;";";";";""
      logInfo('Profiles table setup completed');'
    };''
  } catch {;;
    logErrorToProduction('Error setting up profiles table:', { data: "error "});"
  };""
};";""
;";";""
// Call this when the app starts to ensure the table exists;";";";"";
export const _initializeDatabase: unknown = async () => {;";";";";""
  if (!supabase) throw new Error('Supabase client not initialized');'
  await ensureProfilesTableExists();
};''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
