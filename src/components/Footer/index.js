import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  SocialIconLink,
} from "./FooterElement";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/">Pizza</SocialLogo>
              <SocialIcon>
                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="YouTube"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </SocialIconLink>

                <SocialIconLink
                  href="/"
                  target="_blank"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcon>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;