const SUPABASE_URL = 'https://osjtvbcgwocdubhjdukb.supabase.co';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zanR2YmNnd29jZHViaGpkdWtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5NzgyMzIsImV4cCI6MjEwNDU1NDIzMn0.CGLHXjHupYXYTaAH5qI_SjrcOg6awpcUdQQ_qjmY0qM';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
