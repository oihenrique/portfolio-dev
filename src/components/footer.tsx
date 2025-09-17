import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Container } from "@radix-ui/themes";

export default function Footer() {
  return (
    <Container>
      <div className="p-10">
        <div className="flex pb-2 gap-2 items-center justify-center">
          <button className="cursor-pointer bg-primary-600 p-3 rounded-full">
            <LinkedInLogoIcon width={24} height={24} color="#fafafa" />
          </button>
          <button className="cursor-pointer bg-primary-600 p-3 rounded-full">
            <GitHubLogoIcon width={24} height={24} color="#fafafa" />
          </button>
        </div>
        <hr className="text-primary-700 w-full"></hr>
        <div className="flex gap-2 mt-2 items-center justify-center">
          <EnvelopeClosedIcon color="#fafafa" />
          <p className="text-sm text-background">oi.henriquegomes@gmail.com</p>
        </div>
      </div>
    </Container>
  );
}
