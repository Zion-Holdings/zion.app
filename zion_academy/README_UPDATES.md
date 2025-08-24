# Zion Academy Updates System

A comprehensive updates and announcements system for the Zion Academy learning platform, featuring preview snippets, engagement features, and "New Since Last Visit" functionality.

## Features

### 🎯 Preview Snippets
- **Summary Field**: Optional 1-2 line summaries for each update
- **Auto-preview**: Falls back to first 200 characters if no summary provided
- **Rich Content**: Support for formatted text with bullet points and line breaks

### 🔔 "New Since Last Visit" Notifications
- **Smart Tracking**: Automatically tracks user's last visit time
- **Visual Indicators**: Green "New" badges on fresh content
- **Summary Section**: Prominent display of new updates count
- **Auto-update**: Updates last visit timestamp on page load

### 💬 Engagement Features
- **Reactions**: Three reaction types (Useful, Informative, Urgent)
- **Toggle System**: Click to add/remove reactions
- **Real-time Updates**: Live reaction count updates
- **Visual Feedback**: Active state styling for user reactions

### 💭 Commenting System
- **User Comments**: Full commenting system with user attribution
- **Real-time Updates**: New comments appear immediately
- **Rich Interface**: User avatars and timestamps
- **Empty States**: Helpful messaging when no comments exist

### 🎨 Visual Design
- **Priority Colors**: Color-coded borders (Red=Urgent, Orange=High, Blue=Normal, Gray=Low)
- **Type Badges**: Clear categorization (Course, System, Announcement, Security)
- **Responsive Layout**: Mobile-friendly design with Tailwind CSS
- **Modern UI**: Clean, professional interface with hover effects

## Database Schema

### New Models Added

```python
class Update(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    content = db.Column(db.Text, nullable=False)
    summary = db.Column(db.String(300), nullable=True)  # Preview snippet
    update_type = db.Column(db.String(50), default='general')
    priority = db.Column(db.String(20), default='normal')
    is_published = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

class UpdateReaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    update_id = db.Column(db.Integer, db.ForeignKey('update.id'), nullable=False)
    reaction_type = db.Column(db.String(20), nullable=False)  # 'useful', 'informative', 'urgent'
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class UpdateComment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    update_id = db.Column(db.Integer, db.ForeignKey('update.id'), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
```

### Updated User Model
```python
class User(db.Model):
    # ... existing fields ...
    last_visit = db.Column(db.DateTime, default=datetime.utcnow)  # New field
```

## Setup Instructions

### 1. Initialize Database
```bash
cd zion_academy
flask init-db
```

### 2. Seed Sample Updates
```bash
flask seed-updates
```

### 3. Run the Application
```bash
flask run
```

## Usage

### Public Updates Page
- **URL**: `/updates`
- **Features**: View all published updates with previews and reactions
- **Navigation**: Accessible from main navigation menu

### Individual Update View
- **URL**: `/updates/<id>`
- **Features**: Full content, reactions, and comments
- **Navigation**: Click "Read Full Update" from updates list

### Admin Interface
- **URL**: `/admin/updates`
- **Features**: Create, edit, delete, and manage updates
- **Navigation**: Accessible from main navigation menu

## API Endpoints

### Reactions
```http
POST /api/updates/<update_id>/react
Content-Type: application/json

{
    "user_id": 1,
    "reaction_type": "useful"
}
```

### Comments
```http
POST /api/updates/<update_id>/comment
Content-Type: application/json

{
    "user_id": 1,
    "content": "Great update! Very helpful."
}
```

## Admin Features

### Create Update
- **Form Fields**: Title, Summary, Content, Type, Priority, Publish Status
- **Validation**: Required fields and content length limits
- **Preview**: Character counters and auto-resizing textareas

### Edit Update
- **Full Editing**: Modify all update fields
- **History Tracking**: Shows creation and modification dates
- **Status Management**: Toggle between published and draft

### Manage Updates
- **Table View**: Sortable list of all updates
- **Quick Actions**: View, Edit, Delete operations
- **Status Overview**: Published/Draft indicators

## Customization

### Update Types
Add new types by modifying the `update_type` field options in:
- `admin_create_update.html`
- `admin_edit_update.html`
- `app.py` admin routes

### Priority Levels
Modify priority options in the same templates:
- `low`, `normal`, `high`, `urgent`

### Reaction Types
Add new reactions by updating:
- `models.py` UpdateReaction model
- Frontend templates
- API endpoints

## Technical Details

### Frontend
- **Framework**: Flask with Jinja2 templates
- **Styling**: Tailwind CSS via CDN
- **JavaScript**: Vanilla JS for interactions
- **Responsive**: Mobile-first design approach

### Backend
- **Database**: SQLite with SQLAlchemy ORM
- **API**: RESTful endpoints for reactions and comments
- **Session Management**: User tracking for "New Since Last Visit"
- **Error Handling**: Comprehensive error messages and validation

### Performance
- **Lazy Loading**: Database relationships loaded on demand
- **Efficient Queries**: Optimized database queries with joins
- **Caching**: User visit tracking with minimal database calls

## Troubleshooting

### Common Issues

1. **Database Errors**: Ensure `flask init-db` has been run
2. **Missing Updates**: Check if `flask seed-updates` was executed
3. **Reactions Not Working**: Verify JavaScript is enabled and user_id is set
4. **Styling Issues**: Ensure Tailwind CSS is loading properly

### Debug Mode
Enable debug mode in `app.py`:
```python
if __name__ == '__main__':
    app.run(debug=True)
```

## Future Enhancements

- **Email Notifications**: Send updates to subscribed users
- **Push Notifications**: Browser push notifications for urgent updates
- **Rich Text Editor**: WYSIWYG editor for update content
- **Media Support**: Image and video attachments
- **Analytics**: Track update engagement and user behavior
- **Search**: Full-text search across updates
- **Categories**: Hierarchical organization of updates
- **Scheduling**: Publish updates at specific times

## Contributing

To add new features or fix issues:

1. Update the database models in `models.py`
2. Add new routes in `app.py`
3. Create or modify templates in `templates/`
4. Test thoroughly with different user scenarios
5. Update this documentation

## License

This updates system is part of the Zion Academy platform and follows the same licensing terms.