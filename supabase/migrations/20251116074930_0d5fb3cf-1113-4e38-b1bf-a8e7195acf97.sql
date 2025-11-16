-- Create contacts table for storing contact form submissions
CREATE TABLE IF NOT EXISTS public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact form data
CREATE POLICY "Anyone can submit contact form"
ON public.contacts
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy to prevent reading contact data (admin only access)
CREATE POLICY "Only admins can view contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (false);