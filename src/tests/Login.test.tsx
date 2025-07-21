import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login component', () => {
	it('should have an email and password field, and a submit button', () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const emailField = screen.getByPlaceholderText(/email/i);
		const passwordField = screen.getByPlaceholderText(/password/i);
		const submitButton = screen.getByRole('button');

		expect(emailField).toBeInTheDocument();
		expect(passwordField).toBeInTheDocument();
		expect(submitButton).toBeInTheDocument();
	});

	it('should show error messages when required fields are empty', async () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const submitButton = screen.getByRole('button');
		await userEvent.click(submitButton);

		await waitFor(() => {
			expect(screen.getByText(/please enter your email/i)).toBeInTheDocument();
		});
	});

	it('should allow a user to submit their email and password', async () => {
		render(
			<BrowserRouter>
				<Login />
			</BrowserRouter>
		);

		const emailField = screen.getByPlaceholderText(/email/i);
		const passwordField = screen.getByPlaceholderText(/password/i);
		const submitButton = screen.getByRole('button');

		await userEvent.type(emailField, 'okwudirejoy@gmail.com');
		await userEvent.type(passwordField, 'password');
		await userEvent.click(submitButton);

		// optionally, assert something like success message or navigation
	});
});
