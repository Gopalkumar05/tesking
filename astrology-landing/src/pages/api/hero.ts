import { NextApiRequest, NextApiResponse } from 'next';

interface Badge {
  label: string;
  icon: string;
}

interface HeroData {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  badges: Badge[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HeroData>) {
  const heroData: HeroData = {
    title: "Unlock Your Cosmic Destiny",
    subtitle: "Book sessions with expert astrologers and discover your true path.",
    ctaText: "Book Now",
    ctaLink: "/book",
    imageUrl: "/images/astrologer.png",
    badges: [
      { label: "10k+ Sessions", icon: "Star" },
      { label: "Rated 4.9/5", icon: "ThumbsUp" },
      { label: "Verified Expert", icon: "ShieldCheck" }
    ]
  };

  res.status(200).json(heroData);
}