// pages/privacy-policy.js
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 5 }}>
      <Box className="policy" sx={{ padding: 3, borderRadius: 2, boxShadow: 2, background: '#fff' }}>
   

        <Typography variant="h4" sx={{ color: 'hsl(23.43deg 89.74% 54.12%)', marginBottom: 2 }}>
        Privacy Policy
      </Typography>
        
        <Typography paragraph>
          <strong>We consider the privacy of our customers the most important.</strong> We are in the business of
          serving you, not selling your information. Your name, address information, and credit card information are
          collected only to fulfill your order.
        </Typography>
        
        <Typography paragraph>
          Information security is critical to our business. We use advanced security technology to prevent our
          computers from being accessed by unauthorized persons. We do not distribute customer information to be used
          in mailing lists, surveys, or any other purpose other than what is required to perform our services.
          Shopping with us is 100% safe!!
        </Typography>

        <Typography paragraph>
          MYZK value your privacy and adhere strictly to good privacy practices to
          ensure that your privacy is respected and personal information you provide to us is kept in accordance with
          applicable laws and the policies and practices as described in this Privacy Policy.
        </Typography>

        <Typography paragraph>
          Our privacy policy discloses our privacy practices for handling online personal and non-personal information.
          Please read this Privacy Policy carefully before you use any of MYZK websites (Site(s)) and/or MYZK
          PC/mobile applications (Application(s)). By using or accessing the Sites and/or Application(s), you are
          accepting this Privacy Policy. We reserve the right to change our Privacy Policy and our Terms of Use at any
          time and from time to time, without any notice to you. We encourage you to refer to this Privacy Policy on
          an ongoing basis so that you are aware of the current terms.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>What Information Do We Collect?</Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Non-sensitive/personal Information</Typography>
        <Typography paragraph>
          As a visitor to our Sites, you can engage in many activities without providing any personal information.
          However, we do collect and aggregate information pertaining to the web pages visited and general usage
          patterns through the use of cookies as described below. Such information is not linked to any sensitive
          information. The non-sensitive information we collect helps us identify the most popular areas of our Sites
          and determines the effectiveness of our promotional activities.
        </Typography>

        <Typography paragraph>
          When you download and use our Application(s), some information is provided automatically by your use of the
          Application(s), including any errors encountered, functions/features used, device type, navigation flow,
          operating system, and usage time for each application screen. Such information is technical, not linked to
          any sensitive/personal information, and is collected to help us better understand how users engage with our
          Application(s), improve user experience, adapt or develop new features according to users preferences, and
          determine the effectiveness of our Application(s). Our Application(s) use Google Analytics, which is a web
          analytics service provided by Google.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Sensitive/Personal Information</Typography>
        <Typography paragraph>
          You may have the opportunity to participate in various activities at MYZK Sites or on MYZK social media
          sites, including but not limited to: product registration, special offers, promotions, participation in
          surveys/polls/contests, software downloads, online shopping, newsletter subscription, and/or forum
          participation. These activities may require the collection of your personal information, including: your
          name, postal address, e-mail address, telephone number, fax number, credit card details (only for payment
          obligations to complete your order(s), where required), and/or information about your interests in the use
          of MYZK various products, programs, and services. Such data collected may be combined with the information
          you had previously provided (for example, if you had previously registered the ownership of your MYZK
          products). MYZK is committed to safeguarding your personal information and will only use such information to
          better understand your needs and to provide you with better service.
        </Typography>

        <Typography paragraph>
          To prevent unauthorized access to our database and to ensure the appropriate use of information, we have put
          in place electronic and managerial procedures to safeguard sensitive information. We use Secure Sockets
          Layer (SSL) encryption on web pages where personal information is required.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>How We May Use The Information</Typography>
        <Typography paragraph>
          MYZK will not sell, rent, loan, or lease your personal information to others unless we have your express
          permission or are otherwise required by law or related regulations to do so. MYZK will not use or share the
          personally identifiable information that you provide to us online in ways unrelated to those described
          herein, without (i) first letting you know and (ii) offering you a choice to opt out. If you have any
          problems exercising your choice to opt out, please contact us at <Link href="http://www.MYZK.IN/contact">MYZK Contact</Link>. We may use your personal information to enable us to keep you updated on our latest
          products, offerings, promotions, software updates, improve our targeted advertising, content, and services,
          and to generally improve our communications and personalize your user experience. (Please note that if you
          decide to opt out, we may be unable to provide you with certain services and support, as applicable.) We may
          also use your personal information for our internal purposes - which may include but are not limited to data
          research, analytics, or general audit purposes. MYZK may process personal information on servers in various
          countries around the world. We may process your personal information on a server located outside the country
          where you live.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Cookies</Typography>
        <Typography paragraph>
          Cookies are small text files that a web server can store on a user device/machine. Cookies allow a website
          to store information on a user machine and retrieve it later. Cookies collect information like IP
          addresses, operating systems, and browser software, but they do not collect any personal information.
          Cookies enable us to customize your experience and provide greater convenience at our Sites. You have the
          ability to accept or decline cookies by modifying the settings on your browser; you may wish to refer to the
          instructions for your file management software to locate the file or directory that stores cookies for
          better management of your cookie settings.
        </Typography>

        <Typography paragraph>
          You may refuse the use of cookies by selecting the appropriate settings on your browser. However, please note
          that if you do this, you may not be able to use the full functionality of our Sites.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Third-Party Vendors/Marketing Agents</Typography>
        <Typography paragraph>
          We engage third-party vendors/marketing agents (including Google, Inc. for online advertising,
          marketing, and/or remarketing services for the purpose of remarketing, interest-based advertising, age,
          gender, demographic, or location targeting, etc., to better target and serve more relevant ads to our
          intended audience based on available data. Third-party vendors/marketing agents, including Google, may show
          our advertisements on Sites across the Internet. For more information on how Google uses data when you use
          our Sites/Applications, please refer to: <Link href="https://www.google.com/policies/privacy/partners/">Google Privacy & Terms</Link> (as may be amended by Google from time to time).
        </Typography>

        <Typography paragraph>
          For Sites, as part of our advertising and marketing activities, data analysis, and other activities, we have
          implemented or may implement Google Display Advertising features such as Remarketing, Google Display
          Network Impression Reporting, DoubleClick Campaign Manager Integration, or Google Analytics Demographics and
          Interest Reporting. You may opt out of Google Analytics for Display Advertising and customize Google Display
          Network ads at: <Link href="https://www.google.com/settings/ads">Google Ads Settings</Link>. We and our
          third-party vendors/marketing agents (including but not limited to Google) use first-party cookies (such as
          the Google Analytics cookie) and third-party cookies (such as the DoubleClick cookie) together to inform,
          optimize, and serve ads based on someone past visits to our website. (Please refer to the section on Web
          Analytics/Statistics below for more information.)
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Personally Identifiable Information</Typography>
        <Typography paragraph>
          We do not allow or use or associate personally identifiable information with remarketing lists. We will not
          give personal information about you to third parties without your consent, except as required by law or as
          stated in this Privacy Policy.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Web Analytics/Statistics</Typography>
        <Typography paragraph>
          We use third-party web analytics services (such as Google Analytics) to collect and analyze information
          about our Sites and user interactions with our Sites. Web analytics services collect information about website
          usage and may record user interactions with our Sites, including but not limited to pages visited, time on
          page, and other interactions. The information collected will be used for statistical analysis and will help
          us improve our websites and services. We do not share any personal information with our web analytics
          services.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Childrens Online Privacy Protection Act Compliance</Typography>
        <Typography paragraph>
          We comply with the Childrens Online Privacy Protection Act (COPPA) and will not knowingly collect
          personally identifiable information from children under the age of 13. If you are a parent or guardian and
          believe that your child has provided us with personal information, please contact us.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Your Consent</Typography>
        <Typography paragraph>
          By using this website, you consent to our privacy policy.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Changes to Our Privacy Policy</Typography>
        <Typography paragraph>
          We may update this Privacy Policy from time to time. If we make changes, we will notify you by posting the
          new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </Typography>

        <Typography variant="h6" sx={{ marginTop: 2 }}>Contact Us</Typography>
        <Typography paragraph>
          If you have any questions or concerns about our Privacy Policy, please contact us:
          <Link href="http://www.MYZK.IN/contact"> MYZK Contact</Link>.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;