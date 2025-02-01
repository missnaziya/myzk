import React from 'react';
import { Box, Container, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const HelpFaq = () => {
    return (
        <section>
            {/* Help & FAQs Section */}
            <Container maxWidth="md" sx={{ my: 5 }}>
                <Paper
                    sx={{
                        backgroundColor: '#fff',
                        padding: 4,
                        borderRadius: 2,
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                >
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{ color: '#f37321', fontWeight: 'bold' }}
                    >
                        Help & FAQs
                    </Typography>

                    {/* Frequently Asked Questions */}
                    <Box id="faqs" sx={{ mt: 4 }}>
                        <Box mb={2}>
                            <Typography variant="h6" sx={{ color: '#f37321' }}>
                                What is Myzk?
                            </Typography>
                            <Typography>
                                Myzk.in is an e-commerce platform offering a wide range of products, including
                                electronics and home appliances.
                            </Typography>
                        </Box>

                        <Box mb={2}>
                            <Typography variant="h6" sx={{ color: '#f37321' }}>
                                How can I track my order?
                            </Typography>
                            <Typography>
                                You can track your order by logging into your account and navigating to the Track
                                Order section. You will find tracking information for your recent purchases there.
                            </Typography>
                        </Box>

                        <Box mb={2}>
                            <Typography variant="h6" sx={{ color: '#f37321' }}>
                                What payment methods are accepted?
                            </Typography>
                            <Typography>
                                We accept various payment methods, including credit/debit cards, PayPal, and bank
                                transfers. You can select your preferred payment option during checkout.
                            </Typography>
                        </Box>

                        <Box mb={2}>
                            <Typography variant="h6" sx={{ color: '#f37321' }}>
                                How do I return an item?
                            </Typography>
                            <Typography>
                                To return an item, please visit our Return section on the website, fill out the
                                return form, and follow the instructions provided. Make sure the item is in its
                                original packaging and condition.
                            </Typography>
                        </Box>

                        <Box mb={2}>
                            <Typography variant="h6" sx={{ color: '#f37321' }}>
                                What should I do if I forget my password?
                            </Typography>
                            <Typography>
                                If you forget your password, click on the Forgot Password link on the login page.
                                Follow the instructions to reset your password using your registered email address.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Contact Information */}
                    <Box >
                        <Typography variant="h6" sx={{ color: '#f37321' }}>
                            Contact Us
                        </Typography>
                        <Typography>
                            If you have further questions or need additional assistance, feel free to reach out to
                            us:
                        </Typography>

                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Email:"
                                    secondary="operations@myzk.in"
                                    primaryTypographyProps={{ fontWeight: 'bold' }}
                                    sx={{ borderRight: '2px solid orange', pr: 3 }} // Add right border and padding
                                />
                                <ListItemText
                                    primary="Address:"
                                    secondary="E-169, E Block, Sector 63, Noida, (U.P) 201301"
                                    primaryTypographyProps={{ fontWeight: 'bold' }}
                                    sx={{ borderRight: '2px solid orange', pl: 2 }} // No border for the last item and padding-left
                                />
                                <ListItemText
                                    primary="Phone:"
                                    secondary="+91 9958039775, +91 9650745556"
                                    primaryTypographyProps={{ fontWeight: 'bold' }}
                                    sx={{ borderRight: 'none', pl: 2 }} // Add right border and padding
                                />

                            </ListItem>
                        </List>

                    </Box>
                </Paper>
            </Container>
        </section>
    );
};

export default HelpFaq;