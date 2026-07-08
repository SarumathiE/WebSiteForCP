// api.js
const API_URL = 'http://localhost:5000/api';
const ADMIN_URL = 'http://localhost:5000/api/admin';

// ── TOKEN MANAGEMENT ──
const TOKEN_KEY = 'adminToken';
const USER_KEY = 'adminUser';

export const tokenManager = {
  getToken: () => localStorage.getItem(TOKEN_KEY),
  
  setToken: (token) => {
    localStorage.setItem(TOKEN_KEY, token);
  },
  
  removeToken: () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
  
  getUser: () => {
    try {
      const user = localStorage.getItem(USER_KEY);
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  },
  
  setUser: (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },
  
  isAuthenticated: () => {
    return !!localStorage.getItem(TOKEN_KEY);
  }
};

// ── HELPER FUNCTIONS ──
const getToken = () => tokenManager.getToken();

const handleResponse = async (response) => {
  if (response.status === 401) {
    tokenManager.removeToken();
    throw new Error('Session expired. Please login again.');
  }

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const authorizedFetch = async (url, options = {}) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('No authentication token found. Please login.');
  }

  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`
    }
  });

  return handleResponse(response);
};

// ── IMAGE URL HELPER ──
export const getImageUrl = (imagePath) => {
  if (!imagePath) return null;
  
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  if (imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  if (imagePath.startsWith('/uploads/')) {
    return `http://localhost:5000${imagePath}`;
  }
  
  if (imagePath.startsWith('uploads/')) {
    return `http://localhost:5000/${imagePath}`;
  }
  
  return `http://localhost:5000/uploads/${imagePath}`;
};

// ── APPLY FOR JOB (Public) ──
export const applyForJob = async (formData) => {
  try {
    console.log('📤 Sending application...');
    
    // Log FormData contents for debugging
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value instanceof File ? `File: ${value.name} (${value.size} bytes)` : value}`);
    }

    const response = await fetch(`${API_URL}/careers/apply`, {
      method: 'POST',
      body: formData // Don't set Content-Type, let browser set it with boundary
    });

    console.log('📡 Response status:', response.status);
    
    const data = await response.json();
    console.log('📥 Response data:', data);

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit application');
    }

    return data;
  } catch (error) {
    console.error('❌ Error applying for job:', error);
    throw error;
  }
};

// ── APPLICATIONS API (Admin) ──
export const applicationAPI = {
  getAll: async () => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/applications`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch applications');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error fetching applications:', error);
      return [];
    }
  },

  update: async (id, data) => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/applications/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update application');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error updating application:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/applications/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete application');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error deleting application:', error);
      throw error;
    }
  }
};

// ── MESSAGES API (Admin) ──
export const messageAPI = {
  getAll: async () => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/messages`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error fetching messages:', error);
      return [];
    }
  },

  markRead: async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/messages/${id}/read`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to mark message as read');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error marking message as read:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/messages/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete message');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error deleting message:', error);
      throw error;
    }
  }
};

// ── PROJECT API (Admin) ──
export const projectAPI = {
  getAll: async () => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/projects`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error fetching projects:', error);
      return [];
    }
  },

  create: async (data) => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/projects`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to create project');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error creating project:', error);
      throw error;
    }
  },

  update: async (id, data) => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/projects/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update project');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error updating project:', error);
      throw error;
    }
  },

  delete: async (id) => {
    try {
      const token = getToken();
      const response = await fetch(`${ADMIN_URL}/projects/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete project');
      }
      
      return await response.json();
    } catch (error) {
      console.error('❌ Error deleting project:', error);
      throw error;
    }
  }
};

// ── UPLOAD IMAGE ──
export const uploadImage = async (file) => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error('No authentication token found');
    }

    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch(`${ADMIN_URL}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });

    const result = await handleResponse(response);
    
    if (result && result.imageUrl) {
      result.fullImageUrl = getImageUrl(result.imageUrl);
    }
    
    return result;
  } catch (error) {
    console.error('❌ Error uploading image:', error);
    throw error;
  }
};

// ── MAIN API OBJECT ──
export const api = {
  // ── PROJECTS (Public) ──
  getProjects: async () => {
    try {
      const response = await fetch(`${API_URL}/projects`);
      if (!response.ok) throw new Error('Failed to fetch projects');
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  getFeaturedProjects: async () => {
    try {
      const response = await fetch(`${API_URL}/projects/featured`);
      if (!response.ok) throw new Error('Failed to fetch featured projects');
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching featured projects:', error);
      return [];
    }
  },

  getProjectById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/projects/${id}`);
      if (!response.ok) throw new Error('Project not found');
      return await response.json();
    } catch (error) {
      console.error('Error fetching project:', error);
      return null;
    }
  },

  // ── CAREERS (Public) ──
  getCareers: async () => {
    try {
      const response = await fetch(`${API_URL}/careers`);
      if (!response.ok) throw new Error('Failed to fetch careers');
      const data = await response.json();
      return Array.isArray(data) ? data : [];
    } catch (error) {
      console.error('Error fetching careers:', error);
      return [];
    }
  },

  getCareerById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/careers/${id}`);
      if (!response.ok) throw new Error('Career not found');
      return await response.json();
    } catch (error) {
      console.error('Error fetching career:', error);
      return null;
    }
  },

  // ── TEAM / LEADERSHIP (Public) ──
  getTeam: async () => {
    try {
      console.log('📥 Fetching team members from public endpoint...');
      
      const response = await fetch(`${API_URL}/team`);
      console.log('📥 Team endpoint status:', response.status);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch team: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('📥 Team data received:', data);
      
      let teamData = [];
      if (Array.isArray(data)) {
        teamData = data;
      } else if (data && data.data && Array.isArray(data.data)) {
        teamData = data.data;
      } else if (data && data.team && Array.isArray(data.team)) {
        teamData = data.team;
      } else {
        console.warn('⚠️ Unexpected team data format:', data);
        return [];
      }

      return teamData.map(member => {
        const imageField = member.image || member.ImageUrl || member.imageUrl || member.img || member.photo;
        
        return {
          ...member,
          name: member.name || member.FullName || member.fullName,
          role: member.role || member.Position || member.position,
          bio: member.bio || member.Bio || member.description,
          image: imageField,
          imageUrl: getImageUrl(imageField),
          fullImageUrl: getImageUrl(imageField)
        };
      });
      
    } catch (error) {
      console.error('❌ Error fetching team:', error);
      return [];
    }
  },

  // ── CONTACT ──
  submitContact: async (data) => {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) throw new Error('Failed to send message');
      return await response.json();
    } catch (error) {
      console.error('Error submitting contact:', error);
      throw error;
    }
  },

  // ── ADMIN FUNCTIONS (Protected) ──
  admin: {
    getProjects: async () => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/projects`);
      } catch (error) {
        console.error('❌ Error fetching admin projects:', error);
        return [];
      }
    },

    createProject: async (data) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/projects`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (error) {
        console.error('❌ Error creating project:', error);
        throw error;
      }
    },

    updateProject: async (id, data) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/projects/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (error) {
        console.error('❌ Error updating project:', error);
        throw error;
      }
    },

    deleteProject: async (id) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/projects/${id}`, {
          method: 'DELETE'
        });
      } catch (error) {
        console.error('❌ Error deleting project:', error);
        throw error;
      }
    },

    getCareers: async () => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/careers`);
      } catch (error) {
        console.error('❌ Error fetching admin careers:', error);
        return [];
      }
    },

    createCareer: async (data) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/careers`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (error) {
        console.error('❌ Error creating career:', error);
        throw error;
      }
    },

    updateCareer: async (id, data) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/careers/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (error) {
        console.error('❌ Error updating career:', error);
        throw error;
      }
    },

    deleteCareer: async (id) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/careers/${id}`, {
          method: 'DELETE'
        });
      } catch (error) {
        console.error('❌ Error deleting career:', error);
        throw error;
      }
    },

    getTeam: async () => {
      try {
        const data = await authorizedFetch(`${ADMIN_URL}/leadership`);
        
        if (Array.isArray(data)) {
          return data.map(member => ({
            ...member,
            imageUrl: getImageUrl(member.ImageUrl || member.imageUrl || member.img || member.image),
            fullImageUrl: getImageUrl(member.ImageUrl || member.imageUrl || member.img || member.image)
          }));
        }
        return data;
      } catch (error) {
        console.error('❌ Error fetching admin team:', error);
        return [];
      }
    },

    createTeamMember: async (data) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/leadership`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (error) {
        console.error('❌ Error creating team member:', error);
        throw error;
      }
    },

    updateTeamMember: async (id, data) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/leadership/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
      } catch (error) {
        console.error('❌ Error updating team member:', error);
        throw error;
      }
    },

    deleteTeamMember: async (id) => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/leadership/${id}`, {
          method: 'DELETE'
        });
      } catch (error) {
        console.error('❌ Error deleting team member:', error);
        throw error;
      }
    },

    uploadImage: async (file) => {
      try {
        const token = getToken();
        if (!token) {
          throw new Error('No authentication token found');
        }

        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch(`${ADMIN_URL}/upload`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: formData
        });

        const result = await handleResponse(response);
        
        if (result && result.imageUrl) {
          result.fullImageUrl = getImageUrl(result.imageUrl);
        }
        
        return result;
      } catch (error) {
        console.error('❌ Error uploading image:', error);
        throw error;
      }
    },

    getStats: async () => {
      try {
        return await authorizedFetch(`${ADMIN_URL}/dashboard`);
      } catch (error) {
        console.error('❌ Error fetching dashboard stats:', error);
        return null;
      }
    }
  },

  // ── AUTH ──
  auth: {
    login: async (credentials) => {
      try {
        const response = await fetch(`${API_URL}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials)
        });

        const data = await handleResponse(response);
        
        if (data.token) {
          tokenManager.setToken(data.token);
          if (data.user) {
            tokenManager.setUser(data.user);
          }
        }
        
        return data;
      } catch (error) {
        console.error('❌ Error logging in:', error);
        throw error;
      }
    },

    logout: async () => {
      try {
        const token = getToken();
        if (token) {
          await fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        }
      } catch (error) {
        console.error('❌ Error logging out:', error);
      } finally {
        tokenManager.removeToken();
      }
    },

    getCurrentUser: async () => {
      try {
        const token = getToken();
        if (!token) return null;
        
        const response = await fetch(`${API_URL}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            tokenManager.removeToken();
            return null;
          }
          throw new Error('Failed to fetch user');
        }
        
        return await response.json();
      } catch (error) {
        console.error('❌ Error fetching current user:', error);
        return null;
      }
    },

    isAuthenticated: () => {
      return tokenManager.isAuthenticated();
    }
  }
};

export default api;