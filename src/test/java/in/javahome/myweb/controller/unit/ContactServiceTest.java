package com.pik.contact.service.unit;

import com.pik.contact.domain.Contact;
import com.pik.contact.repository.ContactRepository;
import com.pik.contact.service.ContactService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.List;

import static java.util.Arrays.asList;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;


@RunWith(MockitoJUnitRunner.class)
public class ContactServiceTest {

    @Mock
    ContactRepository contactRepository;

    @InjectMocks
    ContactService contactService;

    @Test
    public void stores_contact() {
        Contact contact = new Contact("John", "Doe", "Developer", "jdoe@company.com", "1234567890", "jdoe90");

        contactService.saveContact(contact);

        verify(contactRepository).save(contact);
    }

    @Test
    public void finds_contacts_lowercase() {
        Contact contact = new Contact("John", "Doe", "Developer", "jdoe@company.com", "1234567890", "jdoe90");
        when(contactRepository.searchContacts("jo")).thenReturn(asList(contact));

        List<Contact> contacts = contactService.searchContacts("Jo");

        assertThat(contacts).contains(contact);
    }

    @Test
    public void stores_contact_with_id() {
        Contact contact = new Contact("John", "Doe", "Developer", "jdoe@company.com", "1234567890", "jdoe90");

        contactService.saveContact(contact);

        ArgumentCaptor<Contact> argument = ArgumentCaptor.forClass(Contact.class);
        verify(contactRepository).save(argument.capture());
        assertThat(argument.getValue().getId()).isNotNull();
    }
}