package com.pik.contact.service.integration;

import com.pik.contact.Application;
import com.pik.contact.domain.Contact;
import com.pik.contact.service.ContactService;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DirtiesContext
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Application.class)
@WebAppConfiguration
public class ContactServiceTest {
    @Autowired
    private ContactService contactService;

    @Before
    public void setUp() {
        contactService.deleteAllContacts();
    }

    @Test
    public void saves_new_contact() {
        //given
        Contact contact = new Contact("John", "Doe", "Developer", "jdoe@company.com", "123 456 7890", "jdoe90");

        //when
        Contact savedContact = contactService.saveContact(contact);

        //then
        assertThat(contactService.load(savedContact.getId())).isEqualTo(contact);
    }

    @Test
    public void finds_contacts_by_name() {
        Contact contact1 = contactService.saveContact(new Contact("John", "Doe", "Developer", "jdoe@company.com", "123 456 7890", "jdoe90"));
        Contact contact2 = contactService.saveContact(new Contact("Johnny", "Smith", "Developer", "smith@company.com", "123 456 7890", "smith90"));
        Contact contact3 = contactService.saveContact(new Contact("Bob", "Smith", "Developer", "bob@company.com", "123 456 7890", "bobbb90"));

        List<Contact> contacts = contactService.searchContacts("John");

        assertThat(contacts).containsOnly(contact1, contact2);
    }
}